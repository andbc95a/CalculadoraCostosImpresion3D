// 1. Capturamos el botón del HTML usando su ID
const ButtonCalcular = document.getElementById('ButtonCalcular');


// 2. Le agregamos un evento al botón para escuchar cuando se le hace clic
ButtonCalcular.addEventListener('click', function() {
    console.log("¡Hiciste clic en el botón calcular!");

    // Datos Generales
    const CostKilo = parseFloat(document.getElementById('costoKiloFilamento').value) || 0;
    const CostoEnergia1 = parseFloat(document.getElementById('costoEnergia').value) || 0;
    const costoMaquina = parseFloat(document.getElementById('costoMaquina').value) || 0;
    const inflacion = parseFloat(document.getElementById('inflacion').value) || 0;
    const mroi = parseFloat(document.getElementById('mroi').value) || 0;
    const pmax = parseFloat(document.getElementById('pmax').value) || 0;
    const cmo = parseFloat(document.getElementById('cmo').value) || 0;

    // Datos Impresión

    const filamentousado = parseFloat(document.getElementById('filamentousado').value) || 0;
    const tiempoimpresion = parseFloat(document.getElementById('tiempoimpresion').value) || 0;
    const horashombre = parseFloat(document.getElementById('horashombre').value) || 0;
    const margenganancia = parseFloat(document.getElementById('margenganancia').value) || 0;

    // --- CÁLCULOS ---

    // Costo del filamento
    const CostMaterial = (CostKilo / 1000) * filamentousado;
    // Costo Energia
    const CostEnergia = (pmax / 1000) * tiempoimpresion * CostoEnergia1;
    // Costo Cuota recuperacion de inversion
    const RecInversion = ((costoMaquina*Math.pow(1 + ((inflacion / 100) / 12), mroi)) / (12 * 30 * mroi)) * tiempoimpresion;
    // Costo mano de obra
    const CostManoObra = horashombre * cmo;
    // Costo mantenimiento
    const CostMantenimiento = (costoMaquina * 0.10)/(8760)*tiempoimpresion;
    // Costo Total
    const CostTotal = CostMaterial + CostEnergia + RecInversion + CostManoObra + CostMantenimiento;
    // ganancia
    const Ganancia = (CostTotal * (1+(margenganancia/100)))- CostTotal;
    // Precio Venta
    const PrecioVenta = (CostTotal * (1+(margenganancia/100)))

    document.getElementById('CostMaterial').innerText = "$" + CostMaterial.toFixed(2);
    document.getElementById('CostEnergia').innerText = "$" + CostEnergia.toFixed(2);
    document.getElementById('RecInversion').innerText = "$" + RecInversion.toFixed(2);
    document.getElementById('CostManoObra').innerText = "$" + CostManoObra.toFixed(2);
    document.getElementById('CostMantenimiento').innerText = "$" + CostMantenimiento.toFixed(2);
    document.getElementById('CostTotal').innerText = "$" + CostTotal.toFixed(2);
    document.getElementById('Ganancia').innerText = "$" + Ganancia.toFixed(2);
    document.getElementById('PrecioVenta').innerText = "$" + PrecioVenta.toFixed(2);


});



