var client = new AddSearchClient('2c32bf3eb06b30af5f8208481aea3e8b');
var searchui = new AddSearchUI(client);

// Add components
searchui.searchField({
  containerId: 'searchfield-container',
  placeholder: 'Keyword..',
  button: 'Search'
});

searchui.searchResults({
  containerId: 'searchresults-container'
});

searchui.pagination({
  containerId: 'pagination-container'
});

// All components added. Start
searchui.start();