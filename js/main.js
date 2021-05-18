
	new Vue({
		el:'#app',
		data:{
			languag:false,
			play:true,
			Vectoor:{
				vector:false
		}
		},
		methods:{
			language(){
				this.languag=!this.languag
			},
			playBtn(){

				this.play=false
			}

		}



	})