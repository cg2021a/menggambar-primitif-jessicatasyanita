function main() {
    /**
     * @type {HTMLCanvasElement} canvas
     */
    const canvas = document.getElementById('myCanvas');

    /**
     * @type {WebGLRenderingContext} gl
     */
    const gl = canvas.getContext('webgl');

    //mendefinisikan posisi titik2 tersebut
    /**
     * A (-0.5, 0.5); B(-0.5, -0.5); C(0.5, -0.5)
     */
    //3 titik & segitiga line loop
    // var vertices = [
    //     -0.5, 0.5,  //titik A
    //     -0.5, -0.5, //titik B
    //     0.5, -0.5   //titik C
    // ];

    //segitiga lines
    // var vertices = [
    //     -0.5, 0.5,   //titik A
    //     -0.5, -0.5,  //titik B
    //     -0.5, -0.5,  //titik B
    //     0.5, -0.5,   //titik C
    //     0.5, -0.5,   //titik C
    //     -0.5, 0.5,   //titik A
    // ];

    //segitiga line LINE_STRIP
    // var vertices = [
    //     -0.5, 0.5,  //titik A
    //     -0.5, -0.5, //titik B
    //     0.5, -0.5   //titik C
    //     -0.5, 0.5,  //titik A
    // ];

    //segitiga pake TRIANGLE_STRIP
    // var vertices = [
    //     -0.5, 0.5,   //titik A
    //     -0.5, -0.5,  //titik B
    //     0.5, -0.5,   //titik C
    //     // 0.5, 0.5   //titik D
    // ];

    //segi empat pake TRIANGLE_FAN
    // var vertices = [
    //     -0.5, 0.5,   //titik A
    //     -0.5, -0.5,  //titik B
    //     0.5, -0.5,   //titik C
    //     0.5, 0.5   //titik D
    // ];

    //segi empat pake TRIANGLE
    var vertices = [
        -0.5, 0.5,   //titik A
        -0.5, -0.5,  //titik B
        0.5, -0.5,   //titik C
        0.5, -0.5,   //titik C
        0.5, 0.5,   //titik D
        -0.5, 0.5   //titik A
    ];

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = document.getElementById("vertexShaderCode").text;

    //membuat titik tsb
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var fragmentShaderCode = document.getElementById("fragmentShaderCode").text;

    //membuat warna
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    //membuat package program agar data bisa dieksekusi
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    //mendefinisikan background
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //menggambar titik
    // gl.drawArrays(gl.POINTS, 0, 3);

    //meggambar segitiga
    // gl.drawArrays(gl.LINES, 0, 6);

    //segitiga pake line loop
    // gl.drawArrays(gl.LINE_LOOP, 0, 3);

    //segitiga pake line strip
    // gl.drawArrays(gl.LINE_STRIP, 0, 4);

    //segitiga pake triangle strip
    // gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);

    //segi empat pake triangle fan
    // gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

    //segi empat pake triangle
    gl.drawArrays(gl.TRIANGLES, 0, 6);

}