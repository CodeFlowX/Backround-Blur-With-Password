const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 36 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})


/*const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;

  // Regular expressions for each required character type
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[-+_!@#$%^&*.,?]/;

  // Check if all required character types are present
  const hasUppercase = uppercaseRegex.test(input);
  const hasLowercase = lowercaseRegex.test(input);
  const hasNumber = numberRegex.test(input);
  const hasSymbol = symbolRegex.test(input);

  // Calculate the blur value based on the validation result
  const isValid = length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSymbol;
  const blurValue = isValid ? 0 : 36;

  // Apply the blur effect to the background
  background.style.filter = `blur(${blurValue}px)`;
}); */
