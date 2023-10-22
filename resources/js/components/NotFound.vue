<template>
    <div class="container text-center">
      <h1 class="display-1">404</h1>
      <p class="lead">Page Not Found</p>
      <p>Sorry, but the page you are looking for does not exist.</p>
      <router-link to="/" class="btn btn-primary">Go to Home</router-link>
    </div>
  </template>

  <script>
  export default {
    name: 'NotFound',
  };
  </script>
