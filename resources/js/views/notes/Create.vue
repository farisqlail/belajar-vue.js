<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        Create new note
                    </div>
                    <div class="card-body">
                        <form action="#" method="post" @submit.prevent="store">
                            <div class="form-group">
                                <label for="">Title</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="form.title"
                                    id="title"
                                />
                                <div v-if="theErrors.title" class="mt-2 text-danger">{{ theErrors.title[0] }}</div>
                            </div>

                            <div class="form-group">
                                <label for="">Subject</label>
                                <select
                                    v-model="form.subject"
                                    id="subject"
                                    class="form-control"
                                >
                                    <option value="">Choose One</option>

                                    <option
                                        v-for="subject in subjects"
                                        :key="subject.id"
                                        :value="subject.id"
                                    >
                                        {{ subject.name }}
                                    </option>
                                </select>

                                <div v-if="theErrors.subject" class="mt-2 text-danger">{{ theErrors.subject[0] }}</div>
                            </div>

                            <div class="form-group">
                                <label for="">Description</label>
                                <textarea
                                    v-model="form.description"
                                    class="form-control"
                                    id="description"
                                    cols="30"
                                    rows="10"
                                ></textarea>

                                <div v-if="theErrors.description" class="mt-2 text-danger">{{ theErrors.description[0] }}</div>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                Submit
                            </button>
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
            form: {
                title: '',
                description: '',
                subject: '',
            },
            subjects: [],
            theErrors: [],
        };
    },

    mounted() {
        this.getSubjects();
    },

    methods: {
        async getSubjects() {
            let response = await axios.get('/api/subjects');
            console.log(response.data);

            if (response.status == 200) {
                this.subjects = response.data;
            }
        },

        async store() {
            try {
                let response = await axios.post('/api/notes/create-new-note', this.form);
                if (response.status == 200) {
                    this.form.title = ""
                    this.form.description = ""
                    this.form.subject = ""
                    this.theErrors = []
                }
            } catch(e) {
                this.theErrors = e.response.data.errors;
            }
        }
    },
};
</script>
