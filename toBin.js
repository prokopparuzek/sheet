function toDec(bin) {
      var out = 0
      bin = bin.toString(10)
      for (i = 0; i < bin.length; i++) {
              if (bin[i] != 0 && bin[i] != 1) {
                        return "Není binární"
                      } 
              out += Math.pow(2, bin.length - 1 - i) * (bin[i])
            }
      return out
}
