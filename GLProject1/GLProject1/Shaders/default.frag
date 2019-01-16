#version 330 core
out vec4 color;

uniform vec3 objectColor;
uniform vec3 lightColor;

void main()
{
	// 环境因子 
	float ambientFactor = 0.1f;
	vec3 ambient = ambientFactor * lightColor;
    color = vec4(ambient * objectColor, 1.0f);
}