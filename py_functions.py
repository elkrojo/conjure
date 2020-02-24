# make dict values lowercase
def lower_dict_attr(d):
    new_dict = dict((k, v.lower()) for k, v in d.items())
    return new_dict
