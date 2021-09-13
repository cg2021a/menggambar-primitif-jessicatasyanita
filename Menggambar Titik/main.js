function main() {
    //akses canvas untuk menggambar
    var canvas = document.getElementById("myCanvas");
    //siapkan tools untuk menggambar --> bolpen, pensil, kuas, dsb
    var context = canvas.getContext("webgl");

    //mendefinisikan titik yang akan dibuat
    var vertexShaderCode = `
    void main(){
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 10.0;
    }`;

    //membuat titik tsb
    var vertexShader = context.createShader(context.VERTEX_SHADER);
    context.shaderSource (vertexShader, vertexShaderCode);
    context.compileShader(vertexShader);

    //mendefinisikan warna
    var fragmentShaderCode = `
    void main() {
        gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    }
    `;

    //membuat warna
    var fragmentShader = context.createShader(context.FRAGMENT_SHADER);
    context.shaderSource(fragmentShader, fragmentShaderCode);
    context.compileShader(fragmentShader);

    //membuat package program agar data bisa dieksekusi
    var shaderProgram = context.createProgram();
    context.attachShader(shaderProgram, vertexShader);
    context.attachShader(shaderProgram, fragmentShader);
    context.linkProgram(shaderProgram);
    context.useProgram(shaderProgram);

    //mendefinisikan background warna
    context.clearColor(1.0, 1.0, 1.0, 1.0);

    context.clear(context.COLOR_BUFFER_BIT);

    context.drawArrays(context.POINTS, 0, 1);
}