<style>
  .home h1 {
    text-align: center;
  }

  p {
    margin: 10px 0;
  }
</style>
<template>
  <div class="home">
    <article>
      <h1>Welcome to Homestead GUI</h1>
      <h3>Disclaimer</h3>
      <p>
        Please be aware that this app is under active development.
        If you find any issues please report them on Github.
      </p>
      <p>
        <strong>Important: </strong> This app interacts with your filesystem, shell and
        development environment. Please note that I'm not responsible for any
        damages or harm caused by this app. <strong>Use on your own risk!</strong>
        <br>
        You should consider to create a backup of your <code>homestead.yaml</code> file.
        <br>
        Please report any issues on Github. Contributions are welcome.
      </p>
    </article>
  </div>
</template>
<script>
  export default {
    name: 'home',
  };
</script>