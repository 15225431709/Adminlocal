<template>
<div class="page-wrapper index">
   <app-header></app-header>
   <div class="main-container">
        
				<app-menu></app-menu>

        <div class="content">
            <router-view></router-view>
        </div>
    </div>
    
</div>	
</template>

<script>
	import Header from './public/Header';
	import Menu from './public/Menu'
	export default {
		name:'Index',
		data() {
			return {
				
			};
		},
		created(){
			console.log(666);
			
		},
		mounted(){
			this.charts();
		},
		components:{
			"app-header":Header,
			"app-menu":Menu,
		},
		methods:{
		   
			 charts:function(){
				 var lineChart = $('#line-chart');

    if (lineChart.length > 0) {
        new Chart(lineChart, {
            type: 'line',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: 'Users',
                    data: [12, 19, 3, 5, 2, 3, 20, 33, 23, 12, 33, 10],
                    backgroundColor: 'rgba(66, 165, 245, 0.5)',
                    borderColor: '#2196F3',
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
			 }
		}
	}
</script>

<style>

</style>
