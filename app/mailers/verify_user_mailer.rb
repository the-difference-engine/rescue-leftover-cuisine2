class VerifyUserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.verify_user_mailer.user_verification.subject
  #
  def user_verification
    @greeting = "Hi"

    mail to: "vichucoder96@gmail.com", subject: "Hello Coders"

  end

end
