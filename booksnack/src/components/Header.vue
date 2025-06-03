<script setup>
    import myLogo from '@/assets/booksnack-logo.png';
</script>

<template>
    <header>
      <nav class="navbar bg-body-tertiary shadow">
        <div class="container-fluid">
          <a class="navbar-brand">BookSnack</a>
          <div class="dropdown shadow rounded-circle">
            <button style="width: 60px; height:60px" class="btn btn-secondary rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-person-circle"></i>
            </button>
            <ul class="dropdown-menu" style="margin-left: -120px;">
              <li><a class="dropdown-item" href="#">Log In</a></li>
              <li><a class="dropdown-item" href="#">Log Out</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

<style>

</style>