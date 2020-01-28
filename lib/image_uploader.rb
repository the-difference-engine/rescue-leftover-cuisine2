require 'cloudinary';

class ImageUploader
  class UploadError < RuntimeError
  end

  def self.upload(image, opts)
    args = {
      allowed_extensions: ['jpg', 'png', 'gif'],
      tags: opts[:tags],
      overwrite: true,
    }

    if opts[:user_id]
      args[:public_id] = "user_#{opts[:user_id]}"
    end

    if opts[:recipe_id]
      args[:public_id] = "recipe_#{opts[:recipe_id]}"
    end

    Cloudinary::Uploader.upload(image, args)
  end

  def self.upload_image(image, opts)
    resp = upload(image, opts)
    resp[:secure_url] || resp[:url]
  end
end
