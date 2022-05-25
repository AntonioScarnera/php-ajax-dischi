const app = new Vue({
    el: '#app',
    data: {
        dischi: [],
        generi:[],
        selectedGenre: '',
        apiPath: './server.php'
    },
    methods:{
        search(){
            this.getData(this.selectedGenre);
        },
        getData(genere=null){
            let path = this.apiPath;
            if(genere){
                path = this.apiPath+'?genre='+genere;
            }
            axios.get(path).then((res)=>{
                this.dischi = res.data;
                if(this.generi.length < 1){
                    this.dischi.forEach(element => {
                        if(!this.generi.includes(element.genre)){
                            this.generi.push(element.genre);
                        }
                    });
                }
            })
        }
    },
    mounted(){
        this.getData();
    }
})