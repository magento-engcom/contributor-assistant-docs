/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issues.opened', async context => {
    const text = 'Hi @' + context.payload.issue.user.login + '. Thank you for your contribution \n' +
      'Here is some useful tips how you can test your changes using Magento test environment.\n' +
      'Add the comment under your pull request to deploy test or vanilla Magento instance:\n' +
      '- `@magento-engcom-team give me test instance` - deploy test instance based on PR changes\n' +
      '- `@magento-engcom-team give me {$VERSION} instance` - deploy vanilla Magento instance\n' +
      '\n' +
      'For more details, please, review the [Magento Contributor Assistant](https://devdocs.magento.com/guides/v2.2/contributor-guide/contributing.html#contributor-assist) documentation'
    const issueComment = context.issue({body: text})
    return context.github.issues.createComment(issueComment)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
