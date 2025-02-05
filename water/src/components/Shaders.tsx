export const vertexShader = /*glsl*/ `
vec3 permute(vec3 x) { 
  return mod(((x * 34.0) + 1.0) * x, 289.0); 
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                      -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

uniform float uTime;
uniform float uAmplitude;
uniform float uFrequency;
uniform float uPersistence;
uniform float uLacunarity;
uniform int uIterations;
uniform float uSpeed;

varying vec3 vNormal;
varying vec3 vWorldPosition;
varying float vElevation; 

float calculateElevation(vec2 p){
  float total = .0;
  float a = 1.;
  float f = uFrequency;
  for (int i = 0; i<uIterations;i++){
   total += a*snoise(f*p+uSpeed*uTime);
   a*=uPersistence;
  f*=uLacunarity;
  }
  return uAmplitude*total;
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = modelPosition.xyz;
  float elevation =calculateElevation(uv);

  float eps = 0.001;
vec3 p = modelPosition.xyz;
vec3 px = vec3(p.x+eps, calculateElevation(vec2(p.x+eps,p.z)),p.z);
vec3 pz = vec3(p.x, calculateElevation(vec2(p.x,p.z+eps)),p.z+eps);
vec3 tangent = normalize(px-p);
vec3 bitangent = normalize(pz-p);
vNormal = normalize(cross(tangent,bitangent));

  modelPosition.y += elevation;
  vElevation = elevation;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}
`;

export const fragmentShader = /*glsl*/ `
uniform vec3 uSurfaceColour;
uniform float uOpacity;
uniform float uPeakTransition;
uniform float uPeakThreshold;
uniform float uTroughTransition;
uniform float uTroughThreshold;

uniform float uFresnelStrength;
uniform float uFresnelPower;
uniform samplerCube uEnvMap;

varying vec3 vWorldPosition;
varying float vElevation; 
varying vec3 vNormal;

void main(){
  //Water Colour
vec3 troughColor = vec3(0.0, 0.12, 0.25);    // Dark Blue (#001f3f)
vec3 peakColor = vec3(0.24, 0.76, 0.83);     // Seafoam Green (#3EC1D3)
vec3 surfaceColor = vec3(0.0, 0.75, 1.0);    // Cyan (#00BFFF)

//Reflection/fresnel
vec3 viewDirection = normalize(vWorldPosition-cameraPosition);
vec3 reflected = reflect(viewDirection,vNormal);
reflected*=-1.;
vec4 reflectionColour = textureCube(uEnvMap,reflected);

float fresnel = 
uFresnelStrength *pow(1.-clamp(dot(viewDirection,vNormal),.0,1.),uFresnelPower);


//Transition
float troughSurface = 
smoothstep(uTroughThreshold-uTroughTransition,uTroughThreshold+uTroughTransition,vElevation); //trough to surface

float surfacePeak = smoothstep(uPeakThreshold-uPeakTransition,uPeakThreshold+uPeakTransition,vElevation); ;//surface to peak

vec3 mixedColour1 = mix(troughColor,surfaceColor,troughSurface);
vec3 mixedColour2 = mix(mixedColour1,peakColor,surfacePeak);
vec3 finalColour = mix(mixedColour2,reflectionColour.rgb,fresnel);

    gl_FragColor = vec4(finalColour,uOpacity);
}
`;
