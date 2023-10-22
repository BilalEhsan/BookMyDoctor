<template>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#"> BookMyDoctor </a>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card mt-5">
                    <!-- Add Bootstrap card class for styling -->
                    <div class="card-header">
                        <h2 class="text-center">Login</h2>
                        <!-- Center the heading -->
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input
                                    v-model="email"
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    v-model="password"
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                class="btn btn-primary btn-block mt-1"
                            >
                                Login
                            </button>
                            <!-- Use btn-block for full width -->
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            axios
                .post("/api/login", {
                    email: this.email,
                    password: this.password,
                })
                .then((response) => {
                    // Handle successful login, e.g., store tokens in local storage
                })
                .catch((error) => {
                    // Handle login error
                });
        },
    },
};
</script>
