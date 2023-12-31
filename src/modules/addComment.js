const addComment = async (appId, itemId, username, comment) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;
  const requestBody = {
    item_id: itemId,
    username,
    comment,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 201) {
    // Comment added successfully
  } else {
    // Handle error here
  }
};

export default addComment;
