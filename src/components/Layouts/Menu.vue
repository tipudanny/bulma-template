<template>
    <aside class="menu">
        <p class="menu-label">
            General
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/Login">Login</router-link>
            </li>
            <li>

                <router-link to="/home" >Home</router-link>
                <!-- class="is-active" -->
            </li>
        </ul>
        <p class="menu-label">
            Team
        </p>
        <ul class="menu-list">
            <li>
                <router-link to="/team" >Manage Your Team</router-link>
                <ul>
                    <li><router-link to="/team/al-mamun">Al-Mamun</router-link></li>
                    <li><router-link to="/team/ruhin-mia">Ruhin Mia</router-link></li>
                    <li><a>Tipu</a></li>
                    <li><a>Mahfuj</a></li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>

</style>