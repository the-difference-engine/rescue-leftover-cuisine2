require 'test_helper'

class VerifyUserMailerTest < ActionMailer::TestCase
  test "user_verification" do
    mail = VerifyUserMailer.user_verification
    assert_equal "User verification", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
