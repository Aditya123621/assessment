// Sample data representing GitHub issues
const issuesData = [
    {
      id: 1,
      title: "Issue 1",
      description: "This is the first issue",
      author: "John Doe",
      created_at: "2023-05-01T12:00:00Z"
    },
    {
      id: 2,
      title: "Issue 2",
      description: "This is the second issue",
      author: "Jane Smith",
      created_at: "2023-05-02T09:30:00Z"
    },
    // Add more issues here...
  ];
  
  // Function to render issues
  function renderIssues() {
    const issuesList = document.getElementById('issues-list');
  
    // Clear existing issues
    issuesList.innerHTML = '';
  
    // Iterate through issues and create HTML elements
    issuesData.forEach(issue => {
      const issueItem = document.createElement('li');
      issueItem.className = 'issue';
  
      const titleElement = document.createElement('div');
      titleElement.className = 'issue-title';
      titleElement.innerText = issue.title;
  
      const descriptionElement = document.createElement('div');
      descriptionElement.className = 'issue-description';
      descriptionElement.innerText = issue.description;
  
      const metaElement = document.createElement('div');
      metaElement.className = 'issue-meta';
      metaElement.innerText = `#${issue.id} opened by ${issue.author} on ${new Date(issue.created_at).toLocaleString()}`;
  
      issueItem.appendChild(titleElement);
      issueItem.appendChild(descriptionElement);
      issueItem.appendChild(metaElement);
  
      issuesList.appendChild(issueItem);
    });
  }
  
  // Call the function to render issues on page load
  window.addEventListener('load', renderIssues);
  