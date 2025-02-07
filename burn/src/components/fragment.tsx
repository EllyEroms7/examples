export const fragment = /*glsl*/ `
varying float vLife;
uniform sampler2D uTexture;

void main() {
  // Color gradient from red to yellow to transparent
  vec3 color = mix(
    mix(vec3(1.0, 0.3, 0.0), vec3(1.0, 0.6, 0.0), vLife * 2.0),
    vec3(1.0, 0.9, 0.3),
    smoothstep(0.5, 1.0, vLife)
  );
  
  float alpha = vLife;
 
  gl_FragColor = vec4(color, 1.0);
}
`;

// export const fragment = /*glsl*/ `

// //
// // Description : Array and textureless GLSL 2D simplex noise function.
// //      Author : Ian McEwan, Ashima Arts.
// //  Maintainer : stegu
// //     Lastmod : 20110822 (ijm)
// //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
// //               Distributed under the MIT License. See LICENSE file.
// //               https://github.com/ashima/webgl-noise
// //               https://github.com/stegu/webgl-noise
// //

// vec3 mod289(vec3 x) {
//     return x - floor(x * (1.0 / 289.0)) * 289.0;
//   }

//   vec2 mod289(vec2 x) {
//     return x - floor(x * (1.0 / 289.0)) * 289.0;
//   }

//   vec3 permute(vec3 x) {
//     return mod289(((x*34.0)+10.0)*x);
//   }

//   float snoise(vec2 v)
//     {
//     const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
//                         0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
//                        -0.577350269189626,  // -1.0 + 2.0 * C.x
//                         0.024390243902439); // 1.0 / 41.0
//   // First corner
//     vec2 i  = floor(v + dot(v, C.yy) );
//     vec2 x0 = v -   i + dot(i, C.xx);

//   // Other corners
//     vec2 i1;
//     i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
//     vec4 x12 = x0.xyxy + C.xxzz;
//     x12.xy -= i1;

//   // Permutations
//     i = mod289(i); // Avoid truncation effects in permutation
//     vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
//           + i.x + vec3(0.0, i1.x, 1.0 ));

//     vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
//     m = m*m ;
//     m = m*m ;

//   // Gradients: 41 points uniformly over a line, mapped onto a diamond.
//   // The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

//     vec3 x = 2.0 * fract(p * C.www) - 1.0;
//     vec3 h = abs(x) - 0.5;
//     vec3 ox = floor(x + 0.5);
//     vec3 a0 = x - ox;

//   // Normalise gradients implicitly by scaling m
//   // Approximation of: m *= inversesqrt( a0*a0 + h*h );
//     m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

//   // Compute final noise value at P
//     vec3 g;
//     g.x  = a0.x  * x0.x  + h.x  * x0.y;
//     g.yz = a0.yz * x12.xz + h.yz * x12.yw;
//     return 130.0 * dot(m, g);
//   }

//   varying vec2 vuv;
//   uniform float uTime;

// //controls
// uniform float uScale;
// uniform float uMix1;
// uniform float uMix2;
// uniform float uIntensity;
// varying vec3 vColor;

// void main(){
//     vec2 uv = vuv;
//     float speed = 1.;
//     float scale = uScale; //4.

//     uv.y -= uTime * speed;
//     uv.x += snoise(vec2(uv.y, uTime/1.2)) * 0.1;

//     float noiseLayer1 = snoise(vec2(uv.x*scale, uv.y))*9.;
//     float noiseLayer2 = snoise(vec2(uv.x*scale, uv.y))*7.;
//     float noiseLayer3 = snoise(vec2(uv.x*scale, uv.y))*5.;

//     float mixedNoise = mix(noiseLayer1, noiseLayer2, uMix1);
//     mixedNoise = mix(mixedNoise, noiseLayer3, uMix2);

//     float noise = smoothstep(0.05, .1, mixedNoise * (1.- vuv.y));
//     float yellownoise = smoothstep(.05, 3., mixedNoise * (1.- vuv.y));

//     // vec3(1.0, 0.5, 0.0)
//     vec3 fireColor1 = mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 0.5, 0.0), noise);
//     vec3 fireColor = mix(fireColor1, vec3(1.0, 1.0, 0.0), yellownoise);

//     //glow
//     fireColor *= yellownoise * 2.0;
//     float glow = smoothstep(0.2, 0.6, noise);
// fireColor *= glow * vec3(1.0, 0.5, 0.0)*uIntensity; //2.

//     gl_FragColor=vec4(fireColor,1.);
// }
// `;
