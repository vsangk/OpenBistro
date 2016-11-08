export const createReview = (review, success, error) => {
  $.ajax({
    url: "api/reviews",
    type: "POST",
    data: { review },
    success,
    error
  });
};

export const updateReview = (review, success, error) => {
  $.ajax({
    url: `api/reviews/${review.id}`,
    type: "PATCH",
    data: { review },
    success,
    error
  });
};

export const deleteReview = (id, success, error) => {
  $.ajax({
    url: `api/reviews/${id}`,
    type: "DELETE",
    success,
    error
  });
};
