def read_file(file_name)
  file = File.open(file_name, 'r')
  data = file.read
  file.close
  data
end
