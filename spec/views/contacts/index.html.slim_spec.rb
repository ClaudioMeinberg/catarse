require 'spec_helper'

describe "contacts/index" do
  before(:each) do
    assign(:contacts, [
      stub_model(Contact,
        :firstname => "Firstname",
        :lastname => "Lastname",
        :email => "Email",
        :sports => "Sports",
        :message => "MyText"
      ),
      stub_model(Contact,
        :firstname => "Firstname",
        :lastname => "Lastname",
        :email => "Email",
        :sports => "Sports",
        :message => "MyText"
      )
    ])
  end

  it "renders a list of contacts" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Firstname".to_s, :count => 2
    assert_select "tr>td", :text => "Lastname".to_s, :count => 2
    assert_select "tr>td", :text => "Email".to_s, :count => 2
    assert_select "tr>td", :text => "Sports".to_s, :count => 2
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
