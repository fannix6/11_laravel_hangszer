const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'hangszerek ',
            urlApi: 'http://localhost:8000/api',
            rows: [],
        }
    },
    methods: {
        async getProducts() {
            const url = `${this.urlApi}/instruments`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result); // konzolra
                this.rows = result;  // KÉPERNYŐRE is
            } catch (error) {
                console.error(error.message);
            }
        },
        onClickButtonTermekek() {
            this.getProducts();
        }
    }
}).mount('#app')
