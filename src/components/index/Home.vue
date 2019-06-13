<template>
	<div class="container-fluid">
	                <div class="row">
	                    <div class="col-md-3">
	                        <div class="card p-4">
	                            <div class="card-body d-flex justify-content-between align-items-center">
	                                <div>
	                                    <span class="h4 d-block font-weight-normal mb-2">54</span>
	                                    <span class="font-weight-light">Total Users</span>
	                                </div>
	
	                                <div class="h2 text-muted">
	                                    <i class="icon icon-people"></i>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	
	                    <div class="col-md-3">
	                        <div class="card p-4">
	                            <div class="card-body d-flex justify-content-between align-items-center">
	                                <div>
	                                    <span class="h4 d-block font-weight-normal mb-2">$32,400</span>
	                                    <span class="font-weight-light">Income</span>
	                                </div>
	
	                                <div class="h2 text-muted">
	                                    <i class="icon icon-wallet"></i>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	
	                    <div class="col-md-3">
	                        <div class="card p-4">
	                            <div class="card-body d-flex justify-content-between align-items-center">
	                                <div>
	                                    <span class="h4 d-block font-weight-normal mb-2">900</span>
	                                    <span class="font-weight-light">Downloads</span>
	                                </div>
	
	                                <div class="h2 text-muted">
	                                    <i class="icon icon-cloud-download"></i>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	
	                    <div class="col-md-3">
	                        <div class="card p-4">
	                            <div class="card-body d-flex justify-content-between align-items-center">
	                                <div>
	                                    <span class="h4 d-block font-weight-normal mb-2">32s</span>
	                                    <span class="font-weight-light">Time</span>
	                                </div>
	
	                                <div class="h2 text-muted">
	                                    <i class="icon icon-clock"></i>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	
	                <div class="row ">
	                    <div class="col-md-12">
	                        <div class="card">
	                            <div class="card-header">
	                                Total Users
	                            </div>
	
	                            <div class="card-body p-0">
	                                <div class="p-4">
	                                    <canvas id="line-chart" width="100%" height="20"></canvas>
	                                </div>
	
	                                <div class="justify-content-around mt-4 p-4 bg-light d-flex border-top d-md-down-none">
	                                    <div class="text-center">
	                                        <div class="text-muted small">Total Traffic</div>
	                                        <div>12,457 Users (40%)</div>
	                                    </div>
	
	                                    <div class="text-center">
	                                        <div class="text-muted small">Banned Users</div>
	                                        <div>95,333 Users (5%)</div>
	                                    </div>
	
	                                    <div class="text-center">
	                                        <div class="text-muted small">Page Views</div>
	                                        <div>957,565 Pages (50%)</div>
	                                    </div>
	
	                                    <div class="text-center">
	                                        <div class="text-muted small">Total Downloads</div>
	                                        <div>957,565 Files (100 TB)</div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    More Templates 
	                </div>
	            </div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		mounted() {
			this.charts();
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
