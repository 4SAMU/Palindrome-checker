function palindrome(str) {
    const alphanumericonly = str.toLowerCase().match(/[a-z0-9]/g);
      return alphanumericonly.join('') ===
          alphanumericonly.reverse().join('');
  }
  
  palindrome("eye");