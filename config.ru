use Rack::Static,
  :urls => ["/images", "/js", "/js/lib", "/js/app", "/css", "/template"]

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}