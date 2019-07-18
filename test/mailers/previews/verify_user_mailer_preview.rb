# Preview all emails at http://localhost:3000/rails/mailers/verify_user_mailer
class VerifyUserMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/verify_user_mailer/user_verification
  def user_verification
    VerifyUserMailer.user_verification
  end

end
