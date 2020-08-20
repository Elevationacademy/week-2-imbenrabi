const compData = [];

$('.generator').click(function() {
    const comp = $(this).closest('.computer');
    const id = comp.data().id
    const BUS = comp.find('.BUS').text();
    const processorId = comp.find('.processor').attr('id');

    console.log(`Processor ID: ${processorId}`);
    console.log(`Computer's data-id: ${id}`);
    console.log(`BUS: ${BUS}`);
    compData.push({cmp_id: id});
})

$('.validator').click(function() {
    const comp = $(this).closest('.computer');
    const genText = comp.find('.generator').text();
    const mb = comp.find('.MB').text();
    const qrs = comp.find('.QR')

    for (const qr of qrs) {
        console.log(`${$(qr).text()}`);
    }

    console.log(`${genText}`)
    console.log(`MB: ${mb}`);
})

