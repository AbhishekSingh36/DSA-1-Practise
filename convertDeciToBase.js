
function val(c)
{
	if (c >= '0'.charCodeAt() &&
		c <= '9'.charCodeAt())
		return (c - '0'.charCodeAt());
	else
		return (c - 'A'.charCodeAt() + 10);
}

function toDeci(str, b_ase)
{
	let len = str.length;
	let power = 1;
	let num = 0;
	let i;
	for(i = len - 1; i >= 0; i--)
	{

		if (val(str[i].charCodeAt()) >= b_ase)
		{
			document.write("Invalid Number");
			return -1;
		}

		num += val(str[i].charCodeAt()) * power;
		power = power * b_ase;
	}
	return num;
}