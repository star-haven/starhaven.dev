<script>
  let mods = [
    { name: 'Paper Mario: Master Quest', description: 'Considered "The Dark Souls of Paper Mario", Master Quest is incredibly difficult. It was designed with elite challenge runners in mind, and unless you have extensive knowledge of Paper Mario, you may struggle with much of the content.', link: 'https://github.com/Brotenko/PMMasterQuest'},
    { name: 'Paper Mario Mod 2', description: 'This is a description of Mod 2.', link: '#'},
  ];
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    padding: 20px;
  }

  h1 {
    color: #333;
    text-align: center;
    font-size: 2.5em;
    margin-top: 50px;
  }

  .mod-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mod-list-item {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    width: 80%;
    max-width: 500px;
  }

  .mod-name {
    font-weight: bold;
    color: #007BFF;
    margin-bottom: 10px;
  }

  .mod-name a {
    text-decoration: none;
    color: inherit;
  }

  .mod-description {
    color: #666;
  }
</style>

<h1>Mods</h1>

<ul class="mod-list">
  {#each mods as mod (mod.name)}
    <li class="mod-list-item">
      <div class="mod-name"><a href={mod.link}>{mod.name}</a></div>
      <div class="mod-description">{mod.description}</div>
    </li>
  {/each}
</ul>
