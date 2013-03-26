var fragment_shader_source = 
  "  precision mediump float;        \n" + 
  "                                  \n" + 
  "  void main(void) {               \n" + 
  "    gl_FragColor = vec4(0,0,0,1); \n" + 
  "  }                               \n";

var vertex_shader_source = 
  "  attribute vec3 aVertexPosition;    \n" + 
  "                                     \n" + 
  "  uniform mat4 uMVMatrix;            \n" + 
  "  uniform mat4 uPMatrix;             \n" + 
  "                                     \n" + 
  "  void main(void) {                  \n" + 
  "    gl_Position = uPMatrix *         \n" +
  "                  uMVMatrix *        \n" +
  "         vec4(aVertexPosition, 1.0); \n" +
  "  }                                  \n";
