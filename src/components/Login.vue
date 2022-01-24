<template>
    <form class="d-flex flex-column justify-content-center align-items-center w-100"
          action="">
        <label class="mb-3 w-100" for="user_id">
            <input class="w-100 rounded" id="user_id" type="text" placeholder="E-Mail">
        </label>
        <label class="mb-3 w-100" for="user_password">
            <input class="w-100 rounded" id="user_password"
                    type="password" placeholder="Password">
        </label>
        <button class="mb-3 w-100 rounded p-3">Login</button>
        <button class="mb-3 w-100 rounded p-2">Facebook</button>
        <button class="mb-3 w-100 rounded p-2">Google</button>
        <a class="text-white">Create a new account</a>
    </form>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
