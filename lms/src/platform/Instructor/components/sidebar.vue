<template>
    <ul class="pa-12">
        <!-- li*7 creating multiple li items shortcut -->
        <li><a href="/instructor/home">Home</a></li>
        <li><a href="/instructor/assignments">Assignments</a></li>
          <li><a href="/instructor/quiz">Quiz</a></li>
        <li><a href="/instructor/course_material">Course Material</a></li>
        <li><a href="/instructor/files">Files</a></li>
        <li><a href="/instructor/grades">Grades</a></li>
        <li><a href="/instructor/syllabus">Syllabus</a></li>
        <li><a href="/instructor/groups">Groups</a></li>
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
    color: #038A99;
    display: block;
}

ul li a:hover,
ul li a:active {
    color: black;
}
</style>