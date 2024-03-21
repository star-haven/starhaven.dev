<script>
    import Nav from "$lib/components/Nav.svelte";
    import { Icon } from "svelte-awesome";
    import SubmitButton from "./SubmitButton.svelte";
    import { faHammer } from "@fortawesome/free-solid-svg-icons";


    var sourceData = null;
    var patchData = null;
    var saveAsName = '';

    let domInputRom;
    let domInputPatch;
    let domInputSaveAs;
    let domInputApply;
    let domInputSkipChecksums;

    function attachBinaryInput(elem, onloadend)
    {
        if(!elem)
        {
            return false;
        }

        // TODO: remember file

        elem.onchange = function(e)
        {
            if(!this.files[0])
            {
                return;
            }

            var reader = new FileReader();
            reader.onloadend = function()
            {
                onloadend(reader.result);
            }
            reader.readAsArrayBuffer(this.files[0]);
        }
    }

    $: attachBinaryInput(domInputRom, function(result) {
        sourceData = result;
        autoName();
        setApplyButtonState();
    })
    $: attachBinaryInput(domInputPatch, function(result) {
        patchData = result;
        autoName();
        setApplyButtonState();
    })
    $: if (domInputSaveAs) {
        domInputSaveAs.onchange = domInputSaveAs.onkeydown = () => setApplyButtonState();
    }
    $: if (domInputApply) {
        domInputApply.onclick = () => runPatcher();
        domInputApply.oncontextmenu = () => runPatcher({debug: true});
    }

    function isReady()
    {
        return (!!domInputRom.files[0] && !!domInputPatch.files[0] && domInputSaveAs.value != '');
    }

    function autoName()
    {
        if(domInputSaveAs.value != '' || !domInputRom.files[0] || !domInputPatch.files[0])
        {
            return;
        }

        var romFileName = domInputRom.files[0].name;
        var patchFileName = domInputPatch.files[0].name;

        var ext = romFileName.split('.').pop();
        var parts = patchFileName.split('.');
        parts.pop();

        var name = parts.join('.') + '.' + ext;

        domInputSaveAs.value = name;
    }

    function runPatcher(cfg)
    {
        cfg = cfg || {};
        var debug = cfg.debug || false;

        if(!isReady())
        {
            return;
        }

        disableInputs();

        function onpatchend(targetData)
        {
            enableInputs();

            if(!debug)
            {
                saveAs(domInputSaveAs.value, targetData);
            }
        }

        function onerror(message)
        {
            alert("Error: " + message + "\n\n" + "See console output for more information.");
            enableInputs();
        }

        /*
        var config = {
            ignoreChecksums: domInputSkipChecksums.checked,
            onerror: onerror,
            onpatchend: onpatchend,
            onprogress: onprogress
        };

        applyPatchAsync(sourceData, patchData, config);
        */
        // async is broken atm
        onpatchend(applyPatch(sourceData, patchData, domInputSkipChecksums.checked));
    }

    function setApplyButtonState()
    {
        if(!isReady())
        {
            domInputApply.setAttribute('disabled', 'true');
            return;
        }

        domInputApply.removeAttribute('disabled');
    }

    function disableInputs()
    {
        domInputRom.setAttribute('disabled', 'true');
        domInputPatch.setAttribute('disabled', 'true');
        domInputSaveAs.setAttribute('disabled', 'true');
        domInputApply.setAttribute('disabled', 'true');
    }

    function enableInputs()
    {
        domInputRom.removeAttribute('disabled');
        domInputPatch.removeAttribute('disabled');
        domInputSaveAs.removeAttribute('disabled');
        domInputApply.removeAttribute('disabled');
    }

    function saveAs(filename, data)
    {
        console.log('saving ' + filename + '...')

        var blob = new Blob([data], {type: 'octet/stream'});
        var url = window.URL.createObjectURL(blob);

        if(navigator && navigator.msSaveBlob)
        {
            console.log("using msSaveBlob...");
            navigator.msSaveBlob(blob, filename);
        }
        else
        {
            var a = document.createElement('a');
            a.style = "display: none";
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            try
            {
                a.click();
            }
            catch(e)
            {
                console.error(e);
                console.log('failed to save file');
            }
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }
    }
</script>

<Nav />

<div
    class="mx-auto flex grow flex-col items-center justify-center gap-4 p-2 sm:p-6"
>
    <h1 class="text-2xl flex items-center justify-center gap-2">
        <Icon data={faHammer} scale={1.4} /> Patcher
    </h1>
    <p>
        This tool applies a <span class="cursor-help underline hover:opacity-60" title="A patch is a way of sharing modifications to a file without distributing the entire file. A patch file contains only the changes made to the ROM.">patch</span> to a <span class="cursor-help underline hover:opacity-60" title="A ROM file is a full backup of a game. The name comes from 'Read Only Memory', which is the type of memory inside most game cartridges.">ROM</span>.
    </p>
    <label>
        Base ROM
        <input type="file" bind:this={domInputRom} accept=".bin, .rom, .iso, .z64, .nes, .smc, .sfc, .gb, .gba, .gbc, .nds, .3ds, .gmc">
    </label>
    <label>
        Patch file
        <input type="file" bind:this={domInputPatch} accept=".patch, .ppf, .bps, .ips, .ups, .xdelta, .aps, .mod">
    </label>

    <input type="text" class="hidden" bind:this={domInputSaveAs} spellcheck="false">

    <SubmitButton value="Apply patch" bind:this={domInputApply} disabled />

    <label class="text-sm space-x-1">
        Disable <span class="cursor-help underline hover:opacity-60" title="Patch files include a 'checksum', which is a special number which verifies whether the ROM it is for is used.">checksum</span> verification
        <input type="checkbox" style="vertical-align: middle;" bind:this={domInputSkipChecksums}>
    </label>

    <a class="text-sm text-blue-500" href="https://github.com/star-haven/starhaven.dev/tree/main/src/lib/libpatch/LICENSE.md">License</a>
</div>

<style>
    input[type='file'] {
        font: inherit;
        padding: 10px;
    }
</style>
