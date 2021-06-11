export const getReadEmails = emails => emails.filter(email => !email.read)

export const getStarredEmails = emails => emails.filter(email => email.starred)

export const getSearchedEmails = (emails, searchInput) =>
  emails.filter(
    email =>
      email.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchInput.toLowerCase())
  )
