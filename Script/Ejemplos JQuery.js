
	//Script de los dos eventos
	<script>
		$(document).ready(function (){
			$('#mostrar').click(function(){
			$('#contenedor').show(2000);
			});
			$('#ocultar').click(function(){
			$('#contenedor').hide(2000);
			});
		});