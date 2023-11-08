function toggleSearch() {
  var searchInput = document.getElementById('searchInput');
  searchInput.classList.toggle('active');

  // Panggil fungsi pencarian hanya saat pencarian aktif
  if (searchInput.classList.contains('active')) {
    searchInput.style.width = '200px';
    searchInput.style.opacity = '1';
    searchItems(searchInput.value);
  } else {
    // Sembunyikan hasil pencarian jika input tidak aktif
    hideSearchResults();
    searchInput.style.width = '0';
    searchInput.style.opacity = '0';
  }
}
function searchItems(query) {
  var items = document.querySelectorAll('.item');
  var resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  query = query.toLowerCase();

  items.forEach(function(item) {
    var searchableText = item.dataset.searchable.toLowerCase();
    if (searchableText.includes(query)) {
      var resultItem = document.createElement('div');
      resultItem.classList.add('resultItem');
      resultItem.textContent = item.dataset.searchable;
      resultsContainer.appendChild(resultItem);
    }
  });
}
function hidePlaceholder() {
  var searchInput = document.getElementById('searchInput');
  searchInput.placeholder = "";
  isPlaceholderHidden = true;
}

function showPlaceholder() {
  var searchInput = document.getElementById('searchInput');
  searchInput.placeholder = "Cari...";
  isPlaceholderHidden = false;
}
