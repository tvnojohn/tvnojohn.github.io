#!/usr/bin/ruby
# -*- coding: utf-8 -*-

require "cgi"
 
begin 
  cgi = CGI.new
 
  print "Content-type: text/html; charset=utf-8\n\n"

  txt = cgi["text"]

  fh = open("data.txt", "w:utf-8")
  fh.print txt
  fh.close

  fh = open("data.txt", "r:utf-8")
  txt  = fh.read()
  fh.close

  print txt
end