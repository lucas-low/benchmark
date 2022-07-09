const Plugin = {
    id: 'custom_canvas_background_color',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = '#072340';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};

export default Plugin;