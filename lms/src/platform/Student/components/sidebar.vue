<template>
    <ul class="pa-12">
        <!-- li*7 creating multiple li items shortcut -->
        <li><a href="/home">Home</a></li>
        <li><a href="/assignments">Assignments</a></li>
        <li><a href="/course_material">Course Material</a></li>
        <li><a href="/files">Files</a></li>
        <li><a href="/grades">Grades</a></li>
        <li><a href="/syllabus">Syllabus</a></li>
        <li><a href="/groups">Groups</a></li>
    </ul>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
* {
    list-style: none;
    text-decoration: none;
}

ul {
    width: 300px;
}

ul li {
    padding: 10px;
}

ul li a{
    color: orange;
    display: block;
}

ul li a:hover,
ul li a:active {
    color: black;
}
</style>