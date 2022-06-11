export const setLoading = (state) => {
  if (state) {
    document.getElementById('spinner').classList.add('spinner--show');
  } else {
    document.getElementById('spinner').classList.remove('spinner--show');
  }
};

 