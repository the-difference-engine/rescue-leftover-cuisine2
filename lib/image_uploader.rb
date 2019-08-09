require 'cloudinary';

module ImageUploader
  class UploadError < RuntimeError
  end

  class CloudinaryUploader
    def upload(image, opts)
      args = {
        allowed_extensions: ['jpg', 'png', 'gif'],
        tags: opts[:tags],
      }

      if opts[:user_id]
        args[:public_id] = "user_#{opts[:user_id]}"
        args[:overwrite] = true
      end

      Cloudinary::Uploader.upload(image, args)
    end
  end

  class LocalUploader
    def upload(image, opts)
      raise UploadError('Not implemented')
    end
  end

  upload_service = CloudinaryUploader

  def self.upload_image(image, opts)
    svc = upload_service()
    resp = svc.upload(image, opts)
    resp[:secure_url] || resp[:url]
  end
end
