var fragment_shader_source = 
  "  precision mediump float;    \n" + 
  "  varying lowp vec4 vColor;   \n" + 
  "                              \n" + 
  "  void main(void) {           \n" + 
  "    gl_FragColor = vColor;    \n" + 
  "  }                           \n";

var vertex_shader_source = 
  "  attribute vec3 aVertexPosition;    \n" + 
  "  attribute vec4 aVertexColor;       \n" + 
  "                                     \n" + 
  "  uniform mat4 uMVMatrix;            \n" + 
  "  uniform mat4 uPMatrix;             \n" + 
  "                                     \n" + 
  "  varying lowp vec4 vColor;          \n" + 
  "                                     \n" + 
  "  void main(void) {                  \n" + 
  "    gl_Position = uPMatrix *         \n" +
  "                  uMVMatrix *        \n" +
  "         vec4(aVertexPosition, 1.0); \n" +
  "    vColor = aVertexColor;           \n" +
  "  }                                  \n";
