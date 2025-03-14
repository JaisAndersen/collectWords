Vue.createApp({
    data() {
        return {
            name: "",
            names: [],       
        };
    },
    methods: {
        saveName() {
            if (this.name.trim() !== '') {
                this.names.push(this.name);
                this.name = '';
                this.showTable = false;
                this.message = '';
            }
        },
        showNames() {
            if (this.names.length > 0) {
                this.showTable = true;
            } else {
                this.message = 'No names to display';
            }
        },
        clearNames() {
            this.names = [];
        }
    }
}).mount("#app");