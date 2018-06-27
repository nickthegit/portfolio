<template>
    <div>
        <div>
            SLUG HERE {{ $route.params }}
        </div>
        <br/><br/><br/><br/>
        <!-- <h3>{{ project.acf }}</h3> -->
        <br/><br/>
        <h3>{{ project.acf.project_title }}</h3>
        <br/><br/>
        <h3>{{ project.acf.feature_image.url }}</h3>
        <br/><br/>
        <h3>{{ project.acf.date }}</h3>
        <br/><br/>
        <h3>{{ project.acf.employer }}</h3>
        <br/><br/>
        <h3 v-if="project.acf.link">{{ project.acf.link }}</h3>
        <br/><br/>
        <h3>{{ project.acf.lightdark_toggle }}</h3>
        <br/><br/>
        <h4>{{ categories }}</h4>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    validate ({ params }) {
        // return params.slug !== undefined // You can also use redirect if you don't want to display a 404 page
        return /^\d+$/.test(params.id)
    },
    async asyncData({ params, error }) {
        let [projectRes, categoryRes] = await Promise.all([
            axios.get('http://nj-admin.co.uk/wp-json/wp/v2/projects/'+ params.id),
            axios.get('http://nj-admin.co.uk/wp-json/wp/v2/categories')
        ])
        return {
            project: projectRes.data,
            allCategories: categoryRes.data
        }
    },
    computed: {
        categories: function () {
            let cats = []          
            for (let i = 0; i < this.project.categories.length; i++) {
                for (let c = 0; c < this.allCategories.length; c++) {
                    if (this.allCategories[c].id == this.project.categories[i]) {
                        cats.push(this.allCategories[c].name);
                    }                   
                }
            }
            return cats
        }
    }
}
</script>

