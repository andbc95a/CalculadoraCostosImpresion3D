function formatearMoneda(valor) {
    return valor.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Capturar el botón del HTML usando su ID
const ButtonCalcular = document.getElementById('ButtonCalcular');


// Agregar un evento al botón para escuchar cuando se le hace clic
ButtonCalcular.addEventListener('click', function() {

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
    const CostMantenimiento = (costoMaquina * 0.10)/(4380)*tiempoimpresion;
    // Costo Total
    const CostTotal = CostMaterial + CostEnergia + RecInversion + CostManoObra + CostMantenimiento;
    // ganancia
    const Ganancia = CostTotal * (margenganancia);
    // Precio Venta
    const PrecioVenta = CostTotal + Ganancia;

    document.getElementById('CostMaterial').innerText = formatearMoneda(CostMaterial);
    document.getElementById('CostEnergia').innerText = formatearMoneda(CostEnergia);
    document.getElementById('RecInversion').innerText = formatearMoneda(RecInversion);
    document.getElementById('CostManoObra').innerText = formatearMoneda(CostManoObra);
    document.getElementById('CostMantenimiento').innerText = formatearMoneda(CostMantenimiento);
    document.getElementById('CostTotal').innerText = formatearMoneda(CostTotal);
    document.getElementById('Ganancia').innerText = formatearMoneda(Ganancia);
    document.getElementById('PrecioVenta').innerText = formatearMoneda(PrecioVenta);


});



