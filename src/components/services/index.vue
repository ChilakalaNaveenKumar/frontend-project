<template>
    <div class="services-cards">
        <v-container>
            <v-row>
                <v-col>
                    <img src="../custom-icons/custom-data-solutions.svg" alt="Data Virtualization Isometric">
                    <h3>Custom Data Solutions</h3>
                    <h4>Unlock the potential of your data with our custom-tailored solutions, delivering actionable insights and business growth.</h4>
                </v-col>
                <v-col>
                    <img src="../custom-icons/system-integration.svg" alt="Data Virtualization Isometric">
                    <h3>System Integration</h3>
                    <h4>Ensure smooth operations by connecting systems seamlessly, enhancing operational efficiency across your enterprise.</h4>
                </v-col>
                <v-col>
                    <img src="../custom-icons/agile-development.svg" alt="Data Virtualization Isometric">
                    <h3>Agile Development</h3>
                    <h4>Rapidly iterate and deliver high-quality solutions, adapting to your evolving needs in a dynamic market.</h4>
                </v-col>
                <v-col>
                    <img src="../custom-icons/noun-database.svg" alt="Data Virtualization Isometric">
                    <h3>User-Friendly Interfaces</h3>
                    <h4>Powerful yet easy-to-use solutions with interactive dashboards and interfaces designed for engagement.</h4>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>
<style lang="scss">
.services-cards h3 {
    font-family: "Amaranth", serif;
    font-weight: 700;
    font-style: normal;
    color: #658cb1;
    margin-bottom: 10px;
}
</style>